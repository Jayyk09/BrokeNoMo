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
