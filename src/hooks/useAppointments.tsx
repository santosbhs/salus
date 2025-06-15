
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface Appointment {
  id: string;
  patient_id: string;
  professional_id: string;
  data_agendamento: string;
  tipo: string;
  status?: string;
  observacoes?: string;
  // Dados relacionados
  patientName?: string;
  professionalName?: string;
}

export const useAppointments = () => {
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();

  const getAppointments = async (): Promise<Appointment[]> => {
    try {
      setLoading(true);
      
      // Aguardar autenticação estar completa
      if (authLoading) {
        console.log('🔄 Aguardando autenticação completar...');
        return [];
      }
      
      if (!user) {
        console.log('❌ Usuário não autenticado para buscar agendamentos');
        return [];
      }
      
      console.log('✅ Usuário autenticado, buscando agendamentos:', user.email);
      
      // Buscar agendamentos com dados de pacientes e profissionais
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          patient:patients(nome),
          professional:professionals(nome)
        `)
        .order('data_agendamento', { ascending: true });
      
      if (error) throw error;
      
      console.log('📊 Agendamentos encontrados:', data?.length || 0);
      
      // Formatar dados para uso no front-end
      return data.map(item => ({
        ...item,
        patientName: item.patient?.nome,
        professionalName: item.professional?.nome
      }));
    } catch (error: any) {
      console.error('Erro ao buscar agendamentos:', error);
      
      // Não mostrar toast se for problema de autenticação em carregamento
      if (!authLoading && user) {
        toast({
          title: 'Erro ao carregar agendamentos',
          description: error.message || 'Não foi possível carregar a lista de agendamentos',
          variant: 'destructive',
        });
      }
      
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getAppointmentById = async (id: string): Promise<Appointment | null> => {
    try {
      setLoading(true);
      
      if (authLoading || !user) {
        return null;
      }
      
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          patient:patients(nome),
          professional:professionals(nome)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      if (!data) return null;
      
      return {
        ...data,
        patientName: data.patient?.nome,
        professionalName: data.professional?.nome
      };
    } catch (error: any) {
      console.error('Erro ao buscar agendamento:', error);
      toast({
        title: 'Erro ao carregar agendamento',
        description: error.message || 'Não foi possível carregar os dados do agendamento',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createAppointment = async (appointmentData: Omit<Appointment, 'id' | 'patientName' | 'professionalName'>): Promise<Appointment | null> => {
    try {
      setLoading(true);
      
      if (authLoading || !user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { data, error } = await supabase
        .from('appointments')
        .insert([{ ...appointmentData, user_id: user.id }])
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Agendamento criado com sucesso!',
        description: `O agendamento foi marcado para ${new Date(appointmentData.data_agendamento).toLocaleDateString()}.`,
      });
      
      // Buscar nomes do paciente e profissional
      const patientRes = await supabase
        .from('patients')
        .select('nome')
        .eq('id', appointmentData.patient_id)
        .single();
        
      const professionalRes = await supabase
        .from('professionals')
        .select('nome')
        .eq('id', appointmentData.professional_id)
        .single();
      
      return {
        ...data,
        patientName: patientRes.data?.nome,
        professionalName: professionalRes.data?.nome
      };
    } catch (error: any) {
      console.error('Erro ao criar agendamento:', error);
      toast({
        title: 'Erro ao criar agendamento',
        description: error.message || 'Não foi possível criar o agendamento',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateAppointment = async (id: string, appointmentData: Partial<Appointment>): Promise<Appointment | null> => {
    try {
      setLoading(true);
      
      if (authLoading || !user) {
        throw new Error('Usuário não autenticado');
      }
      
      // Remover campos calculados que não existem na tabela
      const { patientName, professionalName, ...dataToUpdate } = appointmentData;
      
      const { data, error } = await supabase
        .from('appointments')
        .update(dataToUpdate)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      
      toast({
        title: 'Agendamento atualizado com sucesso!',
        description: 'As informações do agendamento foram atualizadas.',
      });
      
      // Buscar nomes do paciente e profissional
      const patientRes = await supabase
        .from('patients')
        .select('nome')
        .eq('id', data.patient_id)
        .single();
        
      const professionalRes = await supabase
        .from('professionals')
        .select('nome')
        .eq('id', data.professional_id)
        .single();
      
      return {
        ...data,
        patientName: patientRes.data?.nome,
        professionalName: professionalRes.data?.nome
      };
    } catch (error: any) {
      console.error('Erro ao atualizar agendamento:', error);
      toast({
        title: 'Erro ao atualizar agendamento',
        description: error.message || 'Não foi possível atualizar o agendamento',
        variant: 'destructive',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      if (authLoading || !user) {
        throw new Error('Usuário não autenticado');
      }
      
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: 'Agendamento cancelado com sucesso',
        description: 'O agendamento foi removido do sistema.',
      });
      
      return true;
    } catch (error: any) {
      console.error('Erro ao excluir agendamento:', error);
      toast({
        title: 'Erro ao cancelar agendamento',
        description: error.message || 'Não foi possível cancelar o agendamento',
        variant: 'destructive',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment
  };
};
