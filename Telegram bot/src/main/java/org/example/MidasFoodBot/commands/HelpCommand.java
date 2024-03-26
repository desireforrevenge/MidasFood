package org.example.MidasFoodBot.commands;

import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;

public class HelpCommand {
    public static SendMessage help(long chatId) {
        SendMessage message = new SendMessage();
        message.setChatId(chatId);
        message.setParseMode(ParseMode.MARKDOWN);
        message.setText("Для управления ботом вы можете использовать следующие команды:\n" +
                "\n" +
                "*/menu* - Открыть меню всех команд бота.\n" +
                "*/help* - Вывести это сообщение с описанием доступных команд.\n" +
                "*/change* - Просмотр текущих заказов и возможность их изменения.\n" +
                "*/info* - Просмотр статистики вашей сети по продажам за разные периоды времени (день, неделя, месяц, год и т.д.).\n" +
                "\n" +
                "Не стесняйтесь обращаться к боту в любое время! Если у вас возникнут вопросы или потребуется помощь, просто напишите.\n");

        return message;
    }
}
