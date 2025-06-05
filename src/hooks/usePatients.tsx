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
        console.log('Usuário não autenticado para buscar pacientes');
        return [];
      }
      
      console.log('Buscando pacientes para usuário:', user.id);
      
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .eq('user_id', user.id)
        .order('nome', { ascending: true });
      
      if (error) {
        console.error('Erro ao buscar pacientes:', error);
        throw error;
      }
      
      console.log('Pacientes encontrados:', data);
      
      // Processar dados para cálculo de idade
      const processedPatients = data.map(patient => {
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

      console.log('Pacientes processados:', processedPatients);
      return processedPatients;
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

  const createPatient = async (patientData: Omit<Patient, 'id' | 'idade' | 'ultimaConsulta'>): Promise<Patient | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        console.error('Usuário não autenticado - não é possível criar paciente');
        toast({
          title: 'Erro de autenticação',
          description: 'Você precisa estar logado para cadastrar pacientes',
          variant: 'destructive',
        });
        return null;
      }
      
      console.log('Criando paciente para usuário:', user.id);
      console.log('Dados do paciente:', patientData);
      
      // Preparar dados para inserção - remover campos calculados e adicionar user_id
      const insertData = {
        nome: patientData.nome?.trim(),
        cpf: patientData.cpf?.trim(),
        telefone: patientData.telefone?.trim(),
        email: patientData.email?.trim() || null,
        nascimento: patientData.nascimento,
        convenio: patientData.convenio?.trim() || null,
        endereco: patientData.endereco?.trim() || null,
        genero: patientData.genero || null,
        responsavel: patientData.responsavel?.trim() || null,
        observacoes: patientData.observacoes?.trim() || null,
        status: patientData.status || 'Ativo',
        user_id: user.id
      };
      
      console.log('Dados preparados para inserção:', insertData);
      
      const { data, error } = await supabase
        .from('patients')
        .insert([insertData])
        .select()
        .single();
      
      if (error) {
        console.error('Erro do Supabase ao criar paciente:', error);
        throw error;
      }
      
      console.log('Paciente criado com sucesso:', data);
      
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
        .eq('user_id', user.id)
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

  const updatePatient = async (id: string, patientData: Partial<Patient>): Promise<Patient | null> => {
    try {
      setLoading(true);
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      console.log('Atualizando paciente:', id, patientData);
      
      // Remover campos calculados que não existem na tabela
      const { idade, ultimaConsulta, ...dataToUpdate } = patientData;
      
      const { data, error } = await supabase
        .from('patients')
        .update(dataToUpdate)
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single();
      
      if (error) {
        console.error('Erro do Supabase ao atualizar paciente:', error);
        throw error;
      }
      
      console.log('Paciente atualizado com sucesso:', data);
      
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
      
      console.log('Excluindo paciente:', id);
      
      const { error } = await supabase
        .from('patients')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Erro do Supabase ao excluir paciente:', error);
        throw error;
      }
      
      console.log('Paciente excluído com sucesso');
      
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

  const deleteAllPatients = async (): Promise<boolean> => {
    try {
      setLoading(true);
      
      if (!user) {
        console.error('Usuário não autenticado - não é possível excluir pacientes');
        toast({
          title: 'Erro de autenticação',
          description: 'Você precisa estar logado para excluir pacientes',
          variant: 'destructive',
        });
        return false;
      }
      
      console.log('Excluindo todos os pacientes para usuário:', user.id);
      
      const { error } = await supabase
        .from('patients')
        .delete()
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Erro do Supabase ao excluir todos os pacientes:', error);
        throw error;
      }
      
      console.log('Todos os pacientes foram excluídos com sucesso');
      
      toast({
        title: 'Pacientes removidos com sucesso',
        description: 'Todos os pacientes foram removidos do sistema.',
      });
      
      return true;
    } catch (error: any) {
      console.error('Erro ao excluir todos os pacientes:', error);
      toast({
        title: 'Erro ao remover pacientes',
        description: error.message || 'Não foi possível remover os pacientes',
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
    deletePatient,
    deleteAllPatients
  };
};
