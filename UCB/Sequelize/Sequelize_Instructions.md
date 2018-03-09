* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
        -Promised-based (".then", dont have to worry about callbacks, return results when it has the results)
        -ORM
        -A way to simplify MySQL queries

  	- Answer: What advantages does it offer?
        Javascript
        Works with major databases (MySQL, PostGres, SQLite, MsSQL)
        Abstracts the complexity of writing SQL queries (makes queries into simple syntax)
        Easy to test
        Offers support for syncing databases
        Validations are simple to do, restricts to specific forms of data
        

  	- Answer: How do I install it? How do I incorporate it into my app?
        npm install sequelize
        

  	- Answer: What the heck is a Sequelize model? What role will it play?
        Representation of a table in a database

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize?
          Define it first using:
              const/let/var Country = sequelize.define('table', {
                    country: {
                        type: Sequelize.STRING
                    },
                    Phonecode: {
                        type: Sequelize.INT
                    },
                    Capital: {
                        type: Sequelize.STRING
                    },
                    IndependenceYear: {
                        type: Sequelize.INT
                    }
                    },
                    {
                        freezeTableName: true
                    });
                    
                    table.sync({force: true}).then(function(){
                        //table created
                        return table.create({
                            Country: "Afghanistan",
                            PhoneCode: 93,
                            Capital: "Kabul",
                            IndependeceYear: 1919
                        });


  		- How would I query for all the records where the Independence Year was less than 50 years ago?
          table.findAll({
            where: {
                IndependenceYear.gt: new Date().getFullYear() - 50
                }
            }
          })

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)
          
          table.findAll({
              offset: 2,
              limit: 2,
              order: [[sequelize.col('IndependenceYear'), 'DESC']]
            });

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it?
        Data Migration through the command line
  ```
