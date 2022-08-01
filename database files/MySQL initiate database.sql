-- CREATE DATABASE reviews;
-- USE reviews;

-- CREATE TABLE recipe_reviews(
-- recipe_id VARCHAR(100) NOT NULL PRIMARY KEY,
-- recipe_name VARCHAR(100) NOT NULL,
-- total_rating INT NOT NULL,
-- count_rating INT NOT NULL);

-- DELIMITER //

-- CREATE FUNCTION `retrieve_rating`(recipe_id VARCHAR(100), recipe_name VARCHAR(100)) RETURNS float
--     DETERMINISTIC
-- BEGIN
-- DECLARE rating_calculated FLOAT(2);
-- DECLARE exists_var BOOLEAN;
-- SET exists_var = EXISTS(SELECT * FROM recipe_reviews WHERE recipe_reviews.recipe_id = recipe_id);
-- IF exists_var = 0
-- THEN INSERT INTO recipe_reviews (recipe_reviews.recipe_id, recipe_reviews.recipe_name, recipe_reviews.total_rating, recipe_reviews.count_rating)
-- VALUES (recipe_id, recipe_name, 0, 0);
-- END IF;
-- SELECT total_rating/count_rating INTO rating_calculated FROM recipe_reviews 
-- WHERE recipe_id = recipe_reviews.recipe_id;
-- RETURN rating_calculated;
-- END//
-- DELIMITER ;

-- DELIMITER //
-- CREATE FUNCTION `update_rating`(recipe_id VARCHAR(100), rating INT) RETURNS FLOAT(2)
--     DETERMINISTIC
-- BEGIN
-- UPDATE reviews.recipe_reviews
-- SET total_rating = total_rating + rating, count_rating = count_rating + 1
-- WHERE recipe_reviews.recipe_id = recipe_id;
-- RETURN rating;
-- END//
-- DELIMITER ;

-- INSERT INTO recipe_reviews
-- (recipe_id, recipe_name, total_rating, count_rating)
-- VALUES
-- ("1234", "chicken soup", 12, 5),
-- ("2345", "mushroom soup", 23, 5);



