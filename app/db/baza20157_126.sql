-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `baza20157_126`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ToDos`
--

CREATE TABLE `ToDos` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_polish_ci NOT NULL,
  `note` text COLLATE utf8_polish_ci NOT NULL,
  `arch` tinyint(1) NOT NULL,
  `userId` int(11) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `ToDos`
--

INSERT INTO `ToDos` (`id`, `title`, `note`, `arch`, `userId`, `done`) VALUES
(1, 'Tytuł2', 'notatka3', 1, 2, 0),
(2, 'Maciek', 'placek', 0, 1, 0),
(3, 'Obiad', 'za 5 min', 0, 2, 0),
(4, 'new', 'obiad za 5 minutek', 1, 6, 0),
(5, '3232323', '2323323323;lk', 1, 6, 0),
(6, 'Drugie zadanie', '68574hhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhh ', 0, 6, 0),
(7, 'Zadanie', 'edytowany opis', 1, 6, 0),
(8, '532', 'edytowany opis', 1, 6, 0),
(9, '13', 'Zwe', 1, 6, 0),
(10, '9', '9', 1, 6, 0),
(11, '5ry', 'rtyr', 1, 6, 0),
(12, 'Edytowany tytuł', 'opis zadania', 1, 6, 0),
(13, 'Nowe zadanie', 'opis nowego z', 0, 6, 0),
(14, 'jhl', 'undefined', 0, 6, 0),
(15, '534', 'null', 0, 6, 1),
(16, '43', 'null', 0, 6, 1),
(17, '22', 'undefined', 0, 6, 0),
(18, '1', 'undefined', 0, 6, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Users`
--

CREATE TABLE `Users` (
  `userName` text COLLATE utf8_polish_ci,
  `id` int(11) NOT NULL,
  `password` text COLLATE utf8_polish_ci,
  `lastName` text COLLATE utf8_polish_ci,
  `firstName` text COLLATE utf8_polish_ci,
  `arch` tinyint(1) DEFAULT '0',
  `email` text COLLATE utf8_polish_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `Users`
--

INSERT INTO `Users` (`userName`, `id`, `password`, `lastName`, `firstName`, `arch`, `email`) VALUES
('Ola', 1, '123123', 'grzesiek', 'Jacek', NULL, 'gmail@gmail.com'),
('Ola1', 2, '123123', 'grzesiek', 'Jacek', 0, 'gmail@gmail.com'),
('Ola12', 3, '123123', 'grzesiek', 'Jacek', 0, 'gmail@gmail.com'),
('kuba123', 4, '123123', 'undefined', 'undefined', 0, 'undefined'),
('32133', 5, '123123', '123', '123', 0, 'undefined'),
('Jan', 6, '123123', 'Kowalski', 'Jan', 0, 'jan@o2.pl');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `ToDos`
--
ALTER TABLE `ToDos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeksy dla tabeli `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `ToDos`
--
ALTER TABLE `ToDos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT dla tabeli `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `ToDos`
--
ALTER TABLE `ToDos`
  ADD CONSTRAINT `foregin` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
