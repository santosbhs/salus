
import { useState } from 'react';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';
import { Patient } from '@/types/patient';
import { 
  fetchPatients, 
  insertPatient, 
  fetchPatientById, 
  updatePatientById, 
  removePatient, 
  removeAllPatients 
} from '@/services/patientService';

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
      
      return await fetchPatients(user.id);
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
      
      const result = await insertPatient(patientData, user.id);
      
      toast({
        title: 'Paciente cadastrado com sucesso!',
        description: `${patientData.nome} foi adicionado ao sistema.`,
      });
      
      return result;
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
      
      return await fetchPatientById(id, user.id);
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
      
      const result = await updatePatientById(id, patientData, user.id);
      
      toast({
        title: 'Paciente atualizado com sucesso!',
        description: `Os dados de ${result.nome} foram atualizados.`,
      });
      
      return result;
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
      
      await removePatient(id, user.id);
      
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
      
      await removeAllPatients(user.id);
      
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

export type { Patient };
