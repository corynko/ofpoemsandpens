import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default {
	async fetch(request, env) {
		const origin = request.headers.get('Origin');
		const allowedOrigins = ['http://localhost:5173', 'https://ofpensandpoems.com'];

		const isAllowedOrigin = allowedOrigins.includes(origin);

		const corsHeaders = {
			'Access-Control-Allow-Origin': isAllowedOrigin ? origin : '',
			'Access-Control-Allow-Methods': 'POST, OPTIONS, PUT, GET',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Credentials': 'true',
		};

		// Handle preflight requests (OPTIONS)
		if (request.method === 'OPTIONS') {
			console.log('CORS Headers:', corsHeaders);
			return new Response(null, {
				status: 204, // No Content
				headers: corsHeaders,
			});
		}

		// Handle POST requests
		if (request.method === 'POST') {
			try {
				const { fileName, fileType } = await request.json();

				console.log('CORS Headers:', corsHeaders);

				if (!fileName || !fileType) {
					return new Response(JSON.stringify({ error: 'Missing fileName or fileType' }), {
						status: 400,
						headers: corsHeaders,
					});
				}

				const s3Client = new S3Client({
					region: 'us-east-2',
					credentials: {
						accessKeyId: env.AWS_ACCESS_KEY_ID,
						secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
					},
				});

				const command = new PutObjectCommand({
					Bucket: 'opapuploads',
					Key: fileName,
					ContentType: fileType,
				});

				const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
				console.log('Signed URL:', signedUrl);

				return new Response(JSON.stringify({ signedUrl }), {
					status: 200,
					headers: corsHeaders,
				});
			} catch (error) {
				console.error('Error generating signed URL:', error);
				return new Response(JSON.stringify({ error: 'Failed to generate signed URL' }), {
					status: 500,
					headers: corsHeaders,
				});
			}
		}

		// For any other method, return 405 Method Not Allowed
		return new Response('Method Not Allowed', {
			status: 405,
			headers: corsHeaders,
		});
	},
};
