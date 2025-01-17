export declare const rpc: {
    kate: {
        blockLength: {
            description: string;
            params: {
                name: string;
                type: string;
                isOptional: boolean;
            }[];
            type: string;
        };
        queryProof: {
            description: string;
            params: ({
                name: string;
                type: string;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        queryDataProof: {
            description: string;
            params: ({
                name: string;
                type: string;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
    };
};
