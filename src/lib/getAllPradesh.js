const cheerio = require('cheerio');
const getEkantipur = require('./getEkantipur');

const getAllPradesh = async () => {
  const html = await getEkantipur();

  $ = cheerio.load(html);

  let pradeshes = {
    pradesh1: [],
    pradesh2: [],
    pradesh3: [],
    pradesh4: [],
    pradesh5: [],
    pradesh6: [],
    pradesh7: [],
  };

  for (let i = 1; i < 8; i++) {
    $(`#pradesh-${i} .row .item.normal`).each((id, el) => {
      const tempObj = {};
      tempObj.link = $(el).find('.image figure a').attr('href');
      tempObj.img = $(el).find('.image figure a img').attr('data-src');
      tempObj.des = $(el).find('.teaser h2').text().trim();
      pradeshes[`pradesh${i}`].push(tempObj);
    });
  }

  return pradeshes;
};

module.exports = getAllPradesh;
