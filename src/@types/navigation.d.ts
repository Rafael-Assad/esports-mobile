export interface GameParams {
    id: string
    title: string
    bannerUrl: string
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            game: GameParams;
        }
    }
}

// Trazer todos os tipos pra essa pasta