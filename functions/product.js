require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('products');

exports.handler = async (event, context) => {
  try {
    const { id } = event.queryStringParameters;
    if (id) {
      console.log(id);
      const data = await airtable.retrieve(id);
      if (data.error) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'data tidak ditemukan' }),
        };
      }
      const { image, name, price, desc } = data.fields;
      const url = image[0].url;
      const product = { name, price, desc, url };
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server error',
    };
  }
};
