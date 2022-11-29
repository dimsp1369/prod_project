import { useEffect } from 'react';

export function useInitialEffect(cb: () => void) {
    useEffect(() => {
        if (__PROJECT !== 'storybook') {
            cb();
        }
        // eslint-disable-next-line
    }, []);
}
