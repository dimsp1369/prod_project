import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';

interface ThemeButtonProps {
    className?: string
}

export const ThemeButton = memo(({ className }: ThemeButtonProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <Icon Svg={LightTheme} /> : <Icon Svg={DarkTheme} />}
        </Button>
    );
});
