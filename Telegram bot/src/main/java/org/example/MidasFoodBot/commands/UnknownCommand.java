package org.example.MidasFoodBot.commands;

import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Chat;
import org.telegram.telegrambots.meta.api.objects.Update;

public class UnknownCommand {
    public static SendMessage unknownCommand(long chatId) {
        SendMessage message = new SendMessage();
        message.setChatId(chatId);
        message.setParseMode(ParseMode.MARKDOWN);
        message.setText("Извините, наш бот пока-что не знает эту команду :(" + "\n" + "Вы всегда можете посмотреть список команд, введя /help");

        return message;
    }
}
