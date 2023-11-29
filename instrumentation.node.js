"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// instrumentation.node.ts
var sdk_node_1 = require("@opentelemetry/sdk-node");
var exporter_trace_otlp_http_1 = require("@opentelemetry/exporter-trace-otlp-http");
var resources_1 = require("@opentelemetry/resources");
var semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
var sdk_trace_node_1 = require("@opentelemetry/sdk-trace-node");
var sdk = new sdk_node_1.NodeSDK({
    resource: new resources_1.Resource((_a = {},
        _a[semantic_conventions_1.SemanticResourceAttributes.SERVICE_NAME] = 'next-app',
        _a)),
    spanProcessor: new sdk_trace_node_1.SimpleSpanProcessor(new exporter_trace_otlp_http_1.OTLPTraceExporter({
        url: 'https://api.axiom.co/v1/traces',
        headers: {
            'Authorization': 'Bearer xaat-79d29c3f-d2f6-4d16-810e-847701f5aedb',
            'X-Axiom-Dataset': 'otel-next',
        },
    })),
});
try {
    sdk.start();
    console.log('OpenTelemetry SDK started successfully');
}
catch (error) {
    console.error('Error starting OpenTelemetry SDK:', error);
}
