update friends 
set ( user_name, gender, hair_color, eye_color,	hobby, birthday_day, birthday_month, birthday_year)=
    ( $1, $2, $3, $4, $5, $6, $7, $8)
    where user_id=$9;