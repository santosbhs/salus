
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface Triagem {
  id: string;
  patient_id: string;
  queixa_principal: string;
  sintomas?: string[];
  pressao_arterial?: string;
  temperatura?: number;
  frequencia_cardiaca?: number;
  saturacao_oxigenio?: number;
  classificacao_manchester: string;
  observacoes?: string;
  // Dados relacionados
  patientName?: string;
}

export const useTriagem = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const getTriagens = async (): Promise<Triagem[]> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      // Buscar triagens com dados de pacientes
      const { data, error } = await supabase
        .from('triagem')
        .select(`
          *,
          patient:patients(nome)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Formatar dados para uso no front-end
      return data.map(item => ({
        ...item,
        patientName: item.patient?.nome
      }));
    } catch (error: any) {
      console.error('Erro ao buscar triagens:', error);
      toast({
        title: 'Erro ao carregar triagens',
        description: error.message || 'Não foi possível carregar a lista de triagens',
        variant: 'destructive',
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getTriagemById = async (id: string): Promise<Triagem | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('triagem')
        .select(`
          *,
          patient:patients(nome)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      if (!data) return null;
      
      return {
        ...data,
        patientName: data.patient?.nome
      };
    } catch (error: any) {
      console.error('Erro ao buscar triagem:', error);
      toast({
        title: 'Erro ao carregar triagem',
        description: error.message || 'Não foi possível carregar os dados da triagem',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createTriagem = async (triagemData: Omit<Triagem, 'id' | 'patientName'>): Promise<Triagem | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('triagem')
        .insert([{ ...triagemData, user_id: user.id }])
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Triagem registrada com sucesso!',
        description: `Classificação: ${triagemData.classificacao_manchester}`,
      });
      
      // Buscar nome do paciente
      const patientRes = await supabase
        .from('patients')
        .select('nome')
        .eq('id', triagemData.patient_id)
        .single();
      
      return {
        ...data,
        patientName: patientRes.data?.nome
      };
    } catch (error: any) {
      console.error('Erro ao criar triagem:', error);
      toast({
        title: 'Erro ao registrar triagem',
        description: error.message || 'Não foi possível registrar a triagem',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateTriagem = async (id: string, triagemData: Partial<Triagem>): Promise<Triagem | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      // Remover campos calculados que não existem na tabela
      const { patientName, ...dataToUpdate } = triagemData;
      
      const { data, error } = await supabase
        .from('triagem')
        .update(dataToUpdate)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Triagem atualizada com sucesso!',
        description: 'Os dados da triagem foram atualizados.',
      });
      
      // Buscar nome do paciente
      const patientRes = await supabase
        .from('patients')
        .select('nome')
        .eq('id', data.patient_id)
        .single();
      
      return {
        ...data,
        patientName: patientRes.data?.nome
      };
    } catch (error: any) {
      console.error('Erro ao atualizar triagem:', error);
      toast({
        title: 'Erro ao atualizar triagem',
        description: error.message || 'Não foi possível atualizar a triagem',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteTriagem = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { error } = await supabase
        .from('triagem')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: 'Triagem removida com sucesso',
        description: 'O registro de triagem foi removido do sistema.',
      });
      
      return true;
    } catch (error: any) {
      console.error('Erro ao excluir triagem:', error);
      toast({
        title: 'Erro ao remover triagem',
        description: error.message || 'Não foi possível remover o registro de triagem',
        variant: 'destructive',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getTriagens,
    getTriagemById,
    createTriagem,
    updateTriagem,
    deleteTriagem
  };
};
