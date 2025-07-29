const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("Server is Running this is the message to show the server is Running ");
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const name = "purushotham_ragala";
  const dob = "15092003"; 
  const user_id = `${name}_${dob}`;
  const email = "purushotham@example.com";
  const roll_number = "22CS123"; 

  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let alphaString = '';

  for (let item of data) {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      alphaString += item;
    } else {
      special_characters.push(item);
    }
  }

  const reversed = alphaString.split('').reverse();
  let concat_string = '';
  reversed.forEach((ch, i) => {
    concat_string += i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
  });

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
