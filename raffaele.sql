-- -------------------------------------------------------------
-- TablePlus 3.7.1(332)
--
-- https://tableplus.com/
--
-- Database: raffaele
-- Generation Time: 2020-08-23 17:47:50.8470
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

CREATE TABLE `patients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `es_particular` int(11) NOT NULL DEFAULT '1',
  `obra_social` varchar(255) DEFAULT NULL,
  `obra_social_plan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `feature_id` int(11) DEFAULT NULL,
  `can_create` int(11) DEFAULT NULL,
  `can_read` int(11) DEFAULT NULL,
  `can_update` int(11) DEFAULT NULL,
  `can_delete` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  KEY `feature_id` (`feature_id`),
  CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `permissions_ibfk_2` FOREIGN KEY (`feature_id`) REFERENCES `features` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` char(255) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO `features` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
('1', 'usuarios', '2020-08-23 20:30:08', '2020-08-23 20:30:08'),
('2', 'roles', '2020-08-23 20:30:12', '2020-08-23 20:30:12'),
('3', 'turnos', '2020-08-23 20:30:18', '2020-08-23 20:30:18'),
('4', 'recetas', '2020-08-23 20:30:22', '2020-08-23 20:30:22'),
('5', 'historias clinicas', '2020-08-23 20:30:30', '2020-08-23 20:30:30'),
('6', 'disponibilidad horaria', '2020-08-23 20:30:53', '2020-08-23 20:30:53');

INSERT INTO `patients` (`id`, `user_id`, `dni`, `es_particular`, `obra_social`, `obra_social_plan`, `createdAt`, `updatedAt`) VALUES
('1', '1', '1119190', '0', 'OSDE', '210', '2020-08-23 17:51:41', '2020-08-23 17:51:41');

INSERT INTO `permissions` (`id`, `role_id`, `feature_id`, `can_create`, `can_read`, `can_update`, `can_delete`, `createdAt`, `updatedAt`) VALUES
('1', '4', '1', '1', '1', '1', '1', '2020-08-23 20:32:35', '2020-08-23 20:32:35'),
('2', '4', '2', '1', '1', '1', '1', '2020-08-23 20:33:02', '2020-08-23 20:33:02'),
('3', '4', '3', '1', '1', '1', '1', '2020-08-23 20:33:06', '2020-08-23 20:33:06'),
('4', '4', '4', '1', '1', '1', '1', '2020-08-23 20:33:10', '2020-08-23 20:33:10'),
('5', '4', '5', '1', '1', '1', '1', '2020-08-23 20:33:14', '2020-08-23 20:33:14'),
('6', '4', '6', '1', '1', '1', '1', '2020-08-23 20:33:17', '2020-08-23 20:33:17'),
('7', '1', '3', '1', '1', '1', '1', '2020-08-23 20:34:12', '2020-08-23 20:34:12'),
('8', '1', '4', '1', '1', '1', '1', '2020-08-23 20:34:18', '2020-08-23 20:34:18'),
('9', '1', '5', '1', '1', '1', '1', '2020-08-23 20:34:26', '2020-08-23 20:34:26'),
('10', '1', '6', '1', '1', '1', '1', '2020-08-23 20:34:30', '2020-08-23 20:34:30'),
('11', '2', '3', '1', '1', '1', '1', '2020-08-23 20:34:49', '2020-08-23 20:34:49'),
('12', '2', '4', '1', '1', '1', '1', '2020-08-23 20:34:54', '2020-08-23 20:34:54'),
('13', '2', '5', '0', '1', '0', '0', '2020-08-23 20:35:07', '2020-08-23 20:35:07'),
('14', '3', '5', '0', '1', '0', '0', '2020-08-23 20:35:26', '2020-08-23 20:35:26'),
('15', '3', '4', '0', '1', '0', '0', '2020-08-23 20:35:35', '2020-08-23 20:35:35'),
('16', '3', '3', '1', '1', '1', '1', '2020-08-23 20:35:46', '2020-08-23 20:35:46'),
('17', '3', '6', '0', '1', '0', '0', '2020-08-23 20:36:01', '2020-08-23 20:36:01');

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
('1', 'medico', '2020-08-23 20:28:39', '2020-08-23 20:28:39'),
('2', 'secretario', '2020-08-23 20:29:34', '2020-08-23 20:29:34'),
('3', 'paciente', '2020-08-23 20:29:49', '2020-08-23 20:29:49'),
('4', 'admin', '2020-08-23 20:29:54', '2020-08-23 20:29:54');

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200823145448-create-users.js'),
('20200823150402-create-patients.js'),
('20200823195416-create-roles.js'),
('20200823200209-create-features.js'),
('20200823200607-create-permissions.js');

INSERT INTO `users` (`id`, `username`, `email`, `status`, `createdAt`, `updatedAt`) VALUES
('1', 'pgargan', 'pgargan@test.com', '1', '2020-08-23 17:25:59', '2020-08-23 17:25:59');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;