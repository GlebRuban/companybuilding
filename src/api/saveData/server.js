
// const express = require('express');
// const fs = require('fs');
// const app = express();
// const port = 3001;

// app.use(express.json());
// app.post('./api/saveData', (req, res) => {
//   const data = req.body;
//   fs.writeFile('./data.json', JSON.stringify(data), 'utf8', (err) => {
//     if (err) {console.error('Ошибка записи данных:', err);
//       res.status(500).json
//       ({ error: 'Ошибка записи данных' });} 
//       else 
//       {console.log('Данные успешно сохранены');
//         res.json({ success: true });
//       }
//   });
// });
// app.listen(port, () => {console.log(`Сервер запущен на порту ${port}`)});