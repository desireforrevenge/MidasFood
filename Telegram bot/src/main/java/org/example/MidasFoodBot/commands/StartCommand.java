package org.example.MidasFoodBot.commands;

import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.ReplyKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardRow;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;


import org.telegram.telegrambots.meta.api.objects.Chat;
import org.telegram.telegrambots.meta.api.objects.Update;

import java.util.ArrayList;
import java.util.List;

public class StartCommand {
    public static SendMessage start(long chatId) {
        SendMessage messageWithKeyboard = new SendMessage();
        messageWithKeyboard.setChatId(chatId);

        // Текст приветствия
        String welcomeMessage = "*Добро пожаловать в бота управления сетью доставки еды Midas Food!* \uD83C\uDF54\uD83D\uDE9A\n\n" +
                "Я готов помочь вам отслеживать различные параметры вашего бизнеса и управлять вашим сайтом прямо из Telegram.\n\n" +
                "Вот некоторые из команд, которые вы можете использовать:\n" +
                "- /change - Изменить данные о сети\n" +
                "- /info - Просмотр статистики вашей сети\n\n" +
                "Не стесняйтесь обращаться ко мне в любое время! Если у вас возникнут вопросы или потребуется помощь, просто напишите.\n\n" +
                "С уважением,\n" +
                "*Ваш телеграм-бот для управления сетью доставки еды Midas Food* \uD83E\uDD16\n";

        // Устанавливаем текст приветствия с разметкой Markdown
        messageWithKeyboard.setText(welcomeMessage);
        messageWithKeyboard.setParseMode(ParseMode.MARKDOWN);

        // Создаем клавиатуру с кнопками
        ReplyKeyboardMarkup keyboardMarkup = new ReplyKeyboardMarkup();
        keyboardMarkup.setSelective(true);
        keyboardMarkup.setResizeKeyboard(true);
        keyboardMarkup.setOneTimeKeyboard(true);

        // Создаем ряд для кнопок
        KeyboardRow row = new KeyboardRow();
        row.add("/change");
        row.add("/info");

        KeyboardRow row1 = new KeyboardRow();
        row1.add("/menu");

        // Добавляем ряд в клавиатуру
        List<KeyboardRow> keyboard = new ArrayList<>();
        keyboard.add(row);
        keyboard.add(row1);
        keyboardMarkup.setKeyboard(keyboard);



        // Устанавливаем клавиатуру для сообщения
        messageWithKeyboard.setReplyMarkup(keyboardMarkup);

        // Возвращаем объект SendMessage
        return messageWithKeyboard;
    }
}
