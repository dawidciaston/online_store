import { Link, useLocation } from "react-router-dom";
import React from "react";
import { navigationList } from "./navigation-list";
import styles from './styles.module.css';
import classNames from 'classnames';

const NavigationItem = ({ path, label, isSelected, mobile }) => {
    const classes = classNames({
        [styles.headListLink]: !mobile,
        [styles.mobileHeadListLink]: mobile,
        [styles.active]: isSelected,
    })

    return (
        <li>
            <Link className={classes} to={path}>{label}</Link>
        </li>
    );
}

const NavigationList = ({ selectedItem }) => {
    if (!selectedItem) {
        return null;
    }

    return (
        <ul className={styles.headLinksList}>
            {navigationList.map(({ key, path, label}) => {
                const isSelected = path === selectedItem.path;

                return (
                    <NavigationItem key={key} path={path} label={label} isSelected={isSelected} />
                )
            })}
        </ul>
    );
}

const Navigation = () => {
    const {pathname} = useLocation();
    const selectedItem = navigationList.find(({path}) => path === pathname);

    return (
        <nav>
            <NavigationList selectedItem={selectedItem}/>
        </nav>
    )
}

const MobileNavigation = () => {
    const {pathname} = useLocation();
    const selectedItem = navigationList.find(({path}) => path === pathname);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <MobileNavigationButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileNavigationList selectedItem={selectedItem} isOpen={isOpen} />
        </>
    )
}

const MobileNavigationList = ({ isOpen, selectedItem }) => {
    const mobileNavigationClasses = classNames(styles.mobileNavigation, {
       [styles.opened]: isOpen
    });

    return (
        <nav className={mobileNavigationClasses}>
                <ul className={styles.mobileNavigationLinksList}>
                    {navigationList.map(({key, path, label}) => {
                        const isSelected = path === selectedItem.path;

                        return (
                            <NavigationItem mobile key={key} path={path} label={label} isSelected={isSelected}/>
                        )
                    })}
                </ul>
        </nav>
    )
}

const MobileNavigationButton = ({isOpen, setIsOpen}) => {
    const mobileNavigationButtonClasses = classNames(styles.mobileNavigationIconWrapper, {
        [styles.opened]: isOpen
    });
    const mobileNavigationButtonIconLineClasses = classNames(styles.mobileNavigationIconLine, {
        [styles.opened]: isOpen
    });

    return (
        <button onClick={() => setIsOpen(!isOpen)} className={mobileNavigationButtonClasses}>
            <span className={mobileNavigationButtonIconLineClasses}></span>
            <span className={mobileNavigationButtonIconLineClasses}></span>
            <span className={mobileNavigationButtonIconLineClasses}></span>
        </button>
    )
}

export {Navigation, MobileNavigation};
