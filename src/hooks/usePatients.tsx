
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface Patient {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email?: string;
  nascimento: string;
  convenio?: string;
  endereco?: string;
  genero?: string;
  responsavel?: string;
  observacoes?: string;
  status?: string;
  idade?: number; // Calculada, não armazenada
  ultimaConsulta?: string; // Calculada, não armazenada
}

export const usePatients = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const getPatients = async (): Promise<Patient[]> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .order('nome', { ascending: true });
      
      if (error) throw error;
      
      // Processar dados para cálculo de idade
      return data.map(patient => {
        const birthDate = new Date(patient.nascimento);
        const today = new Date();
        let idade = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          idade--;
        }
        
        return {
          ...patient,
          idade,
          ultimaConsulta: 'Nunca' // Será atualizado em uma consulta separada
        };
      });
    } catch (error: any) {
      console.error('Erro ao buscar pacientes:', error);
      toast({
        title: 'Erro ao carregar pacientes',
        description: error.message || 'Não foi possível carregar a lista de pacientes',
        variant: 'destructive',
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getPatientById = async (id: string): Promise<Patient | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      if (!data) return null;
      
      // Calcular idade
      const birthDate = new Date(data.nascimento);
      const today = new Date();
      let idade = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        idade--;
      }
      
      return { ...data, idade, ultimaConsulta: 'Nunca' };
    } catch (error: any) {
      console.error('Erro ao buscar paciente:', error);
      toast({
        title: 'Erro ao carregar paciente',
        description: error.message || 'Não foi possível carregar os dados do paciente',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createPatient = async (patientData: Omit<Patient, 'id' | 'idade' | 'ultimaConsulta'>): Promise<Patient | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('patients')
        .insert([{ ...patientData, user_id: user.id }])
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Paciente cadastrado com sucesso!',
        description: `${patientData.nome} foi adicionado ao sistema.`,
      });
      
      // Calcular idade para o retorno
      const birthDate = new Date(data.nascimento);
      const today = new Date();
      let idade = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        idade--;
      }
      
      return { ...data, idade, ultimaConsulta: 'Nunca' };
    } catch (error: any) {
      console.error('Erro ao criar paciente:', error);
      toast({
        title: 'Erro ao cadastrar paciente',
        description: error.message || 'Não foi possível cadastrar o paciente',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updatePatient = async (id: string, patientData: Partial<Patient>): Promise<Patient | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      // Remover campos calculados que não existem na tabela
      const { idade, ultimaConsulta, ...dataToUpdate } = patientData;
      
      const { data, error } = await supabase
        .from('patients')
        .update(dataToUpdate)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Paciente atualizado com sucesso!',
        description: `Os dados de ${data.nome} foram atualizados.`,
      });
      
      // Recalcular idade para o retorno
      const birthDate = new Date(data.nascimento);
      const today = new Date();
      let idadeCalculada = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        idadeCalculada--;
      }
      
      return { ...data, idade: idadeCalculada, ultimaConsulta: ultimaConsulta || 'Nunca' };
    } catch (error: any) {
      console.error('Erro ao atualizar paciente:', error);
      toast({
        title: 'Erro ao atualizar paciente',
        description: error.message || 'Não foi possível atualizar os dados do paciente',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deletePatient = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { error } = await supabase
        .from('patients')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: 'Paciente removido com sucesso',
        description: 'O paciente foi removido do sistema.',
      });
      
      return true;
    } catch (error: any) {
      console.error('Erro ao excluir paciente:', error);
      toast({
        title: 'Erro ao remover paciente',
        description: error.message || 'Não foi possível remover o paciente',
        variant: 'destructive',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
  };
};
