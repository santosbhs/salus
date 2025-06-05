
export const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

export const processPatientData = (patientData: any) => {
  return {
    ...patientData,
    idade: calculateAge(patientData.nascimento),
    ultimaConsulta: 'Nunca'
  };
};

export const preparePatientForInsert = (patientData: any, userId: string) => {
  return {
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
    user_id: userId
  };
};

export const preparePatientForUpdate = (patientData: any) => {
  const { idade, ultimaConsulta, ...dataToUpdate } = patientData;
  return dataToUpdate;
};
