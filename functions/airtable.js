require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('products');

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map(product => {
      const { id } = product;
      const { name, price, image, desc, tag } = product.fields;
      const { url } = image[0];
      return { id, name, price, url, desc, tag };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify('Server Error !. Coba beberapa saat lagi...'),
    };
  }
};
