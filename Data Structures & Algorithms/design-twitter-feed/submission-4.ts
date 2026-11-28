class Twitter {
    private tweetsTable: Map<number, { id: number, time: number }[]>;
    private followTable: Map<number, Set<number>>;
    private timestamp: number;

    constructor() {
        this.tweetsTable = new Map();
        this.followTable = new Map();
        this.timestamp = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        const data = this.tweetsTable.get(userId) ?? [];

        data.push({ id: tweetId, time: this.timestamp++ });
        this.tweetsTable.set(userId, data);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        const following = (this.followTable.get(userId) ?? new Set());
        let tweets: { id: number, time: number }[] = [];
        tweets = tweets.concat(this.tweetsTable.get(userId) ?? []);
        Array.from(following.values()).forEach((u) => {
            tweets = tweets.concat(this.tweetsTable.get(u) ?? []);
        });

        return tweets.sort((a, b) => b.time - a.time).slice(0, 10).map(t => t.id);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        const data = this.followTable.get(followerId) ?? new Set();

        data.add(followeeId);

        this.followTable.set(followerId, data);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        const data = this.followTable.get(followerId) ?? new Set();

        data.delete(followeeId);

        this.followTable.set(followerId, data);
    }
}