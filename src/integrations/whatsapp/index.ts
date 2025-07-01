
import axios from "axios";

export async function sendMessage(numero: string, message: string = "Isso é um teste") {
  try {
    const response = await axios.post(
      "https://v2-api.gzappy.com/message/send-text",
      {
        phone: numero,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer {token}`,
        },
      }
    );

    console.log("Mensagem enviada com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    throw error;
  }
}

export async function sendAppointmentConfirmation(
  numero: string, 
  patientName: string, 
  professionalName: string, 
  dateTime: string,
  appointmentType: string
) {
  const message = `🏥 *CONFIRMAÇÃO DE AGENDAMENTO*

Olá, ${patientName}!

Seu agendamento foi confirmado com sucesso:

👨‍⚕️ *Profissional:* ${professionalName}
📅 *Data:* ${new Date(dateTime).toLocaleDateString('pt-BR')}
⏰ *Horário:* ${new Date(dateTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
🩺 *Tipo:* ${appointmentType}

Por favor, chegue com 15 minutos de antecedência.

Em caso de cancelamento, entre em contato conosco com pelo menos 24h de antecedência.

Atenciosamente,
Equipe Salus`;

  return await sendMessage(numero, message);
}

export async function sendAppointmentButton(
  numero: string,
  patientName: string,
  professionalName: string,
  dateTime: string,
  appointmentType: string,
  appointmentId: string
) {
  try {
    const response = await axios.post(
      "https://v2-api.gzappy.com/message/send-button",
      {
        phone: numero,
        message: `🏥 *CONFIRMAÇÃO DE AGENDAMENTO*

Olá, ${patientName}!

Seu agendamento foi registrado:

👨‍⚕️ *Profissional:* ${professionalName}
📅 *Data:* ${new Date(dateTime).toLocaleDateString('pt-BR')}
⏰ *Horário:* ${new Date(dateTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
🩺 *Tipo:* ${appointmentType}

Por favor, confirme sua presença:`,
        buttons: [
          {
            id: `confirm_${appointmentId}`,
            title: "✅ Confirmar"
          },
          {
            id: `cancel_${appointmentId}`,
            title: "❌ Cancelar"
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer {token}`,
        },
      }
    );

    console.log("Mensagem com botões enviada com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar mensagem com botões:", error);
    // Fallback para mensagem simples se botões não funcionarem
    return await sendAppointmentConfirmation(numero, patientName, professionalName, dateTime, appointmentType);
  }
}
