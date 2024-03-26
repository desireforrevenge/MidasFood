package org.example.MidasFoodBot.service;

import org.example.MidasFoodBot.commands.HelpCommand;
import org.example.MidasFoodBot.commands.StartCommand;
import org.example.MidasFoodBot.commands.UnknownCommand;
import org.example.MidasFoodBot.config.BotConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Chat;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.User;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.ReplyKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardRow;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class TelegramBot extends TelegramLongPollingBot {

    final BotConfig config;

    public TelegramBot(BotConfig config) {
        this.config = config;
    }

    @Override
    public String getBotUsername() {
        return config.getBotName();
    }

    @Override
    public String getBotToken() {
        return config.getBotToken();
    }

    @Override
    public void onUpdateReceived(Update update) {
        if (update.hasMessage() && update.getMessage().hasText()) {
            String messageText = update.getMessage().getText();
            long chatId = update.getMessage().getChatId();


            if (messageText.equalsIgnoreCase("начать") || messageText.equalsIgnoreCase("/start") || messageText.equalsIgnoreCase("start")) {
                send(StartCommand.start(chatId));
            }
            else if (messageText.equalsIgnoreCase("/help") || messageText.equalsIgnoreCase("помощь") || messageText.equalsIgnoreCase("help")) {
                send(HelpCommand.help(chatId));
            }
            else {
                send(UnknownCommand.unknownCommand(chatId));
            }
        }
    }

    public void send(SendMessage sendMessage) {
        try {
            execute(sendMessage);
        } catch (TelegramApiException telegramApiException) {
            log.error("Error occurred: " + telegramApiException.getMessage());
        }
    }
}
