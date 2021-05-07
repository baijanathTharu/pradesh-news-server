const cheerio = require('cheerio');
const getEkantipur = require('./getEkantipur');

const getPradesh = async (i) => {
  const html = await getEkantipur();

  $ = cheerio.load(html);

  const tempObj = {};
  $(`#pradesh-${i} .row .item.normal`).each((id, el) => {
    tempObj.link = $(el).find('.image figure a').attr('href');
    tempObj.img = $(el).find('.image figure a img').attr('data-src');
    tempObj.des = $(el).find('.teaser h2').text().trim();
  });
  return tempObj;
};

module.exports = getPradesh;
