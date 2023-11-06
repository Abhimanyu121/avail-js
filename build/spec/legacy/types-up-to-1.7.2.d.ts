export declare const types: {
    AppId: string;
    DataLookupIndexItem: {
        appId: string;
        start: string;
    };
    DataLookup: {
        size: string;
        index: string;
    };
    KateCommitment: {
        rows: string;
        cols: string;
        dataRoot: string;
        commitment: string;
    };
    V1HeaderExtension: {
        commitment: string;
        appLookup: string;
    };
    HeaderExtension: {
        _enum: {
            V1: string;
        };
    };
    DaHeader: {
        parentHash: string;
        number: string;
        stateRoot: string;
        extrinsicsRoot: string;
        digest: string;
        extension: string;
    };
    Header: string;
    CheckAppIdExtra: {
        appId: string;
    };
    CheckAppIdTypes: {};
    CheckAppId: {
        extra: string;
        types: string;
    };
    BlockLength: {
        max: string;
        cols: string;
        rows: string;
        chunkSize: string;
    };
    PerDispatchClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    DataProof: {
        root: string;
        proof: string;
        numberOfLeaves: string;
        leaf_index: string;
        leaf: string;
    };
    Cell: {
        row: string;
        col: string;
    };
};
