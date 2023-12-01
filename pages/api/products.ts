// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

// We will fetch data from https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json and server

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const response = await fetch(
		"https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
	);
	const data = await response.json();

	console.log(data, "data");
	res.status(200).json(data);
}
