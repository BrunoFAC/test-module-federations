
    export type RemoteKeys = 'consumer_two/consumer-two-screens';
    type PackageType<T> = T extends 'consumer_two/consumer-two-screens' ? typeof import('consumer_two/consumer-two-screens') :any;