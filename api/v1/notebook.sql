-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 08 2024 г., 16:09
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `notebook`
--

-- --------------------------------------------------------

--
-- Структура таблицы `note`
--

CREATE TABLE `note` (
  `id` int NOT NULL,
  `name` char(255) NOT NULL,
  `company` char(255) DEFAULT NULL,
  `phone` char(20) NOT NULL,
  `email` char(255) NOT NULL,
  `birthday` char(20) DEFAULT NULL,
  `image` char(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `note`
--

INSERT INTO `note` (`id`, `name`, `company`, `phone`, `email`, `birthday`, `image`) VALUES
(1, 'Пёрт Иванович Сперанский', 'СДК', '8 999 555 44 00', 'petr@yandex.ru', '12.05.1989', '/photos/Пёрт Иванович Сперанский/unnamed.jpg'),
(15, 'Василий Иванович Картаухов', 'Трансиб', '8-555-222-333', 'vasya@yandex.ru', '12.02.1989', '/photos/Василий Иванович Картаухов/unnamed.jpg'),
(29, 'Андрей Семёнович Стрельцов', 'Лукойл', '8-999-000-1111', 'andrey@mail.ru', '30.06.1992', '/photos/Андрей Семёнович Стрельцов/Je0qpHy4KHM.jpg'),
(30, 'Алексей Анатольевич Бурунов', 'Сбер', '8-999-111-3366', 'alexey@gmail.com', '02.12.1996', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `note`
--
ALTER TABLE `note`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
