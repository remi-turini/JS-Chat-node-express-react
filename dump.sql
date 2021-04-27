/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: message
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `message` (
  `id_message` int(11) NOT NULL AUTO_INCREMENT,
  `room` varchar(255) NOT NULL,
  `pseudo` varchar(30) NOT NULL,
  `texte` text NOT NULL,
  `date_heure` text NOT NULL,
  PRIMARY KEY (`id_message`)
) ENGINE = MyISAM AUTO_INCREMENT = 24 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: room
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = MyISAM AUTO_INCREMENT = 3 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: message
# ------------------------------------------------------------

INSERT INTO
  `message` (
    `id_message`,
    `room`,
    `pseudo`,
    `texte`,
    `date_heure`
  )
VALUES
  (
    23,
    'JavaScript',
    're',
    'hey',
    'Jan 19, 2021 1:42 PM'
  );
INSERT INTO
  `message` (
    `id_message`,
    `room`,
    `pseudo`,
    `texte`,
    `date_heure`
  )
VALUES
  (
    22,
    'Python',
    'Ben',
    'Python room message 2',
    'Jan 18, 2021 7:28 PM'
  );
INSERT INTO
  `message` (
    `id_message`,
    `room`,
    `pseudo`,
    `texte`,
    `date_heure`
  )
VALUES
  (
    21,
    'Python',
    'Ben',
    'Python room message',
    'Jan 18, 2021 7:28 PM'
  );
INSERT INTO
  `message` (
    `id_message`,
    `room`,
    `pseudo`,
    `texte`,
    `date_heure`
  )
VALUES
  (
    20,
    'JavaScript',
    'remi',
    'JS room message 2',
    'Jan 18, 2021 7:28 PM'
  );
INSERT INTO
  `message` (
    `id_message`,
    `room`,
    `pseudo`,
    `texte`,
    `date_heure`
  )
VALUES
  (
    19,
    'JavaScript',
    'remi',
    'JS room message',
    'Jan 18, 2021 7:27 PM'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: room
# ------------------------------------------------------------

INSERT INTO
  `room` (`id`, `room_name`)
VALUES
  (1, 'LouisVuitton');
INSERT INTO
  `room` (`id`, `room_name`)
VALUES
  (2, 'Gucci');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
