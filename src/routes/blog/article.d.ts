export type Article = {
	title: string;
	description: string;
	cover_image: string;
	published_timestamp: string;
	social_image: string;
	tags: string[];
	path: string;
	url: string;
	body_html: string;
	body_markdown: string;
};

const dns = require('dns');
const options = {
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup('appwrite.io', options, (err, address, family) =>
  console.log(address, family);