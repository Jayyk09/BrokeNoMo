declare module "graph.js" {
    export default class Graph {
        constructor();

        addNode(node: string): void;
        removeNode(node: string): void;
        addEdge(node1: string, node2: string): void;
        removeEdge(node1: string, node2: string): void;
        nodes(): Set<string>;
        edges(): [string, string][];
        hasNode(node: string): boolean;
        hasEdge(node1: string, node2: string): boolean;
    }
}

export interface CallData {
    call_type: string;
    access_token: string;
    call_id: string;
    agent_id: string;
    call_status: string;
    metadata: Record<string, unknown>;
    retell_llm_dynamic_variables: {
      customer_name: string;
    };
    opt_out_sensitive_data_storage: boolean;
    start_timestamp: number;
    end_timestamp: number;
    transcript: string;
    transcript_object: TranscriptEntry[];
    transcript_with_tool_calls: TranscriptEntry[];
    recording_url: string;
    public_log_url: string;
    latency: LatencyData;
    disconnection_reason: string;
    call_analysis: CallAnalysis;
    call_cost: CallCost;
  }
  
 export interface TranscriptEntry {
    role: "agent" | "user";
    content: string;
    words: Word[];
  }
  
 export interface Word {
    word: string;
    start: number;
    end: number;
  }
  
 export interface LatencyData {
    e2e: LatencyMetrics;
    llm: LatencyMetrics;
    llm_websocket_network_rtt: LatencyMetrics;
    tts: LatencyMetrics;
    knowledge_base: LatencyMetrics;
    s2s: LatencyMetrics;
  }
  
 export interface LatencyMetrics {
    p50: number;
    p90: number;
    p95: number;
    p99: number;
    max: number;
    min: number;
    num: number;
    values: number[];
  }
  
 export interface CallAnalysis {
    call_summary: string;
    in_voicemail: boolean;
    user_sentiment: string;
    call_successful: boolean;
    custom_analysis_data: Record<string, unknown>;
  }
  
 export interface CallCost {
    product_costs: ProductCost[];
    total_duration_seconds: number;
    total_duration_unit_price: number;
    total_one_time_price: number;
    combined_cost: number;
  }
  
export interface ProductCost {
    product: string;
    unitPrice: number;
    cost: number;
  }
  