
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface Professional {
  id: string;
  nome: string;
  tipo: string;
  registro: string;
  especialidade: string;
  telefone: string;
  email: string;
  horario_inicio?: string;
  horario_fim?: string;
  dias_atendimento?: string[];
  observacoes?: string;
  status?: string;
  consultasHoje?: number; // Calculado, não armazenado
}

export const useProfessionals = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const getProfessionals = async (): Promise<Professional[]> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('professionals')
        .select('*')
        .order('nome', { ascending: true });
      
      if (error) throw error;
      
      // Retornar dados com cálculos adicionais se necessário
      return data.map(professional => ({
        ...professional,
        consultasHoje: 0 // Será atualizado em uma consulta separada
      }));
    } catch (error: any) {
      console.error('Erro ao buscar profissionais:', error);
      toast({
        title: 'Erro ao carregar profissionais',
        description: error.message || 'Não foi possível carregar a lista de profissionais',
        variant: 'destructive',
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getProfessionalById = async (id: string): Promise<Professional | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('professionals')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      if (!data) return null;
      
      return { ...data, consultasHoje: 0 };
    } catch (error: any) {
      console.error('Erro ao buscar profissional:', error);
      toast({
        title: 'Erro ao carregar profissional',
        description: error.message || 'Não foi possível carregar os dados do profissional',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createProfessional = async (professionalData: Omit<Professional, 'id' | 'consultasHoje'>): Promise<Professional | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('professionals')
        .insert([{ ...professionalData, user_id: user.id }])
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Profissional cadastrado com sucesso!',
        description: `${professionalData.nome} foi adicionado à equipe.`,
      });
      
      return { ...data, consultasHoje: 0 };
    } catch (error: any) {
      console.error('Erro ao criar profissional:', error);
      toast({
        title: 'Erro ao cadastrar profissional',
        description: error.message || 'Não foi possível cadastrar o profissional',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateProfessional = async (id: string, professionalData: Partial<Professional>): Promise<Professional | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      // Remover campos calculados que não existem na tabela
      const { consultasHoje, ...dataToUpdate } = professionalData;
      
      const { data, error } = await supabase
        .from('professionals')
        .update(dataToUpdate)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Profissional atualizado com sucesso!',
        description: `Os dados de ${data.nome} foram atualizados.`,
      });
      
      return { ...data, consultasHoje: consultasHoje || 0 };
    } catch (error: any) {
      console.error('Erro ao atualizar profissional:', error);
      toast({
        title: 'Erro ao atualizar profissional',
        description: error.message || 'Não foi possível atualizar os dados do profissional',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteProfessional = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { error } = await supabase
        .from('professionals')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: 'Profissional removido com sucesso',
        description: 'O profissional foi removido da equipe.',
      });
      
      return true;
    } catch (error: any) {
      console.error('Erro ao excluir profissional:', error);
      toast({
        title: 'Erro ao remover profissional',
        description: error.message || 'Não foi possível remover o profissional',
        variant: 'destructive',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getProfessionals,
    getProfessionalById,
    createProfessional,
    updateProfessional,
    deleteProfessional
  };
};
