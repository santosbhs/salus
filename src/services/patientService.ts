
import { supabase } from '@/integrations/supabase/client';
import { Patient } from '@/types/patient';
import { processPatientData, preparePatientForInsert, preparePatientForUpdate } from '@/utils/patientUtils';

export const fetchPatients = async (userId: string): Promise<Patient[]> => {
  console.log('Buscando pacientes para usuário:', userId);
  
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('user_id', userId)
    .order('nome', { ascending: true });
  
  if (error) {
    console.error('Erro ao buscar pacientes:', error);
    throw error;
  }
  
  console.log('Pacientes encontrados:', data);
  
  const processedPatients = data.map(processPatientData);
  console.log('Pacientes processados:', processedPatients);
  
  return processedPatients;
};

export const insertPatient = async (patientData: Omit<Patient, 'id' | 'idade' | 'ultimaConsulta'>, userId: string): Promise<Patient> => {
  console.log('Criando paciente para usuário:', userId);
  console.log('Dados do paciente:', patientData);
  
  const insertData = preparePatientForInsert(patientData, userId);
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
  return processPatientData(data);
};

export const fetchPatientById = async (id: string, userId: string): Promise<Patient | null> => {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('id', id)
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  if (!data) return null;
  
  return processPatientData(data);
};

export const updatePatientById = async (id: string, patientData: Partial<Patient>, userId: string): Promise<Patient> => {
  console.log('Atualizando paciente:', id, patientData);
  
  const dataToUpdate = preparePatientForUpdate(patientData);
  
  const { data, error } = await supabase
    .from('patients')
    .update(dataToUpdate)
    .eq('id', id)
    .eq('user_id', userId)
    .select()
    .single();
  
  if (error) {
    console.error('Erro do Supabase ao atualizar paciente:', error);
    throw error;
  }
  
  console.log('Paciente atualizado com sucesso:', data);
  return processPatientData(data);
};

export const removePatient = async (id: string, userId: string): Promise<void> => {
  console.log('Excluindo paciente:', id);
  
  const { error } = await supabase
    .from('patients')
    .delete()
    .eq('id', id)
    .eq('user_id', userId);
  
  if (error) {
    console.error('Erro do Supabase ao excluir paciente:', error);
    throw error;
  }
  
  console.log('Paciente excluído com sucesso');
};

export const removeAllPatients = async (userId: string): Promise<void> => {
  console.log('Excluindo todos os pacientes para usuário:', userId);
  
  const { error } = await supabase
    .from('patients')
    .delete()
    .eq('user_id', userId);
  
  if (error) {
    console.error('Erro do Supabase ao excluir todos os pacientes:', error);
    throw error;
  }
  
  console.log('Todos os pacientes foram excluídos com sucesso');
};
