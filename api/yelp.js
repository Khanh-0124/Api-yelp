import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer HF00UwX7YubKPmiSqwhbTdb-8-rxbphkMoh6ahcajIth-Q_1WvvLA6bqQlMkkC3gX47mte6quHEfbl4f0tV4UryJzDDD4kAnnNHBawvRX4BU8dnyPu45w28_P0g3YnYx',
  },
});
