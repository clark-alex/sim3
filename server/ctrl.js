module.exports={

    update: (req,res)=>{

        const dbInstance = req.app.get('db')
        const {user_name, gender, hair_color, eye_color, hobby, birthday_day, birtthday_month, birthday_year,id }= req.body

        dbInstance.update([user_name, gender, hair_color, eye_color, hobby, birthday_day, birtthday_month, birthday_year,id])
        console.log('req.body',req.body)
        .then(()=> res.status(200).send())
        .catch(()=> res.status(500).send())


    },
    create: (req,res) => {
        const dbInstance = req.app.get('db')

        dbInstance.create_empty([req.body.id])
        .then(()=> res.status(200).send())
        .catch(()=> res.status(500).send("errrrrorrrr"))
    


    }

}