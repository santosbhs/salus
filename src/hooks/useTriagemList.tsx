
import { useState, useEffect, useCallback } from 'react';
import { useTriagem, Triagem } from './useTriagem';

export const useTriagemList = () => {
  const [pacientesAguardando, setPacientesAguardando] = useState<Triagem[]>([]);
  const [loading, setLoading] = useState(true);
  const { getTriagens } = useTriagem();

  const loadTriagens = useCallback(async () => {
    console.log('🔄 Carregando triagens...');
    setLoading(true);
    
    try {
      const triagens = await getTriagens();
      console.log('✅ Triagens carregadas:', triagens);
      
      // Ordenar por prioridade da classificação Manchester
      const ordemPrioridade = {
        'vermelho': 1,
        'laranja': 2,
        'amarelo': 3,
        'verde': 4,
        'azul': 5
      };
      
      const triagensSorted = triagens.sort((a, b) => {
        return ordemPrioridade[a.classificacao_manchester] - ordemPrioridade[b.classificacao_manchester];
      });
      
      setPacientesAguardando(triagensSorted);
    } catch (error) {
      console.error('❌ Erro ao carregar triagens:', error);
      setPacientesAguardando([]);
    } finally {
      setLoading(false);
    }
  }, [getTriagens]);

  useEffect(() => {
    loadTriagens();
  }, [loadTriagens]);

  const refreshTriagens = useCallback(() => {
    loadTriagens();
  }, [loadTriagens]);

  return {
    pacientesAguardando,
    loading,
    refreshTriagens
  };
};
