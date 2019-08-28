export const methodStatusCode = {
	GET: [200, 301, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
	POST: [200, 201, 204, 307, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
	PUT: [200, 201, 400, 401, 403, 404, 405, 409, 429, 500, 502, 503, 504, 507],
	PATCH: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504],
	DELETE: [200, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504, 507],
};

export const responseMap: Map<string, Map<string, string>> = new Map([
	[
		"2xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "Content-Encoding" : "",
                "Vary" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "OData-Version" : 4.0,
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
                }`,
			],
			["responseBody", "{}"],
		]),
	],
	[
		"3xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "Content-Encoding" : "",
                "Vary" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "OData-Version" : 4.0,
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
                }`,
			],

			["responseBody", "{}"],
		]),
	],
	[
		"4xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
            }`,
			],

			[
				"responseBody",
				`{
                "error": {
                    "code": "BadRequest",
                    "message": "",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
			],
		]),
	],
	[
		"429",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "timeout": 300,
                "Date" : ""
            }`,
			],

			[
				"responseBody",
				`{
                "error": {
                    "code": "BadRequest",
                    "message": "",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
			],
		]),
	],
	[
		"5xx",
		new Map([
			[
				"responseHeader",
				`{
                "Cache-Control" : "",
                "Transfer-Encoding" : "",
                "Content-Type" : "",
                "request-id" : "",
                "client-request-id" : "",
                "x-ms-ags-diagnostic" : "",
                "Duration" : 103.8879,
                "Strict-Transport-Security" : "",
                "Date" : ""
            }`,
			],

			[
				"responseBody",
				`{
                "error": {
                    "code": "BadRequest",
                    "message": "",
                    "innerError": {
                        "request-id": "c1e7bf3f-74e9-4ba7-a0f6-835e065f8f45",
                        "date": "2019-08-20T10:41:33"
                    }
                }
            }`,
			],
		]),
	],
]);

export const httpStatusCode = {
	100: "Continue",
	101: "Switching Protocols",
	102: "Processing",
	200: "OK",
	201: "Created",
	202: "Accepted",
	203: "Non-authoritative Information",
	204: "No Content",
	205: "Reset Content",
	206: "Partial Content",
	207: "Multi-Status",
	208: "Already Reported",
	226: "IM Used",
	300: "Multiple Choices",
	301: "Moved Permanently",
	302: "Found",
	303: "See Other",
	304: "Not Modified",
	305: "Use Proxy",
	307: "Temporary Redirect",
	308: "Permanent Redirect",
	400: "Bad Request",
	401: "Unauthorized",
	402: "Payment Required",
	403: "Forbidden",
	404: "Not Found",
	405: "Method Not Allowed",
	406: "Not Acceptable",
	407: "Proxy Authentication Required",
	408: "Request Timeout",
	409: "Conflict",
	410: "Gone",
	411: "Length Required",
	412: "Precondition Failed",
	413: "Payload Too Large",
	414: "Request-URI Too Long",
	415: "Unsupported Media Type",
	416: "Requested Range Not Satisfiable",
	417: "Expectation Failed",
	418: "I'm a teapot",
	421: "Misdirected Request",
	422: "Unprocessable Entity",
	423: "Locked",
	424: "Failed Dependency",
	426: "Upgrade Required",
	428: "Precondition Required",
	429: "Too Many Requests",
	431: "Request Header Fields Too Large",
	444: "Connection Closed Without Response",
	451: "Unavailable For Legal Reasons",
	499: "Client Closed Request",
	500: "Internal Server Error",
	501: "Not Implemented",
	502: "Bad Gateway",
	503: "Service Unavailable",
	504: "Gateway Timeout",
	505: "HTTP Version Not Supported",
	506: "Variant Also Negotiates",
	507: "Insufficient Storage",
	508: "Loop Detected",
	510: "Not Extended",
	511: "Network Authentication Required",
	599: "Network Connect Timeout Error",
};
