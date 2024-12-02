import React from 'react';
import { MainLayout } from 'modules/layouts';
import { Text } from 'components/Text';
import { Logo } from 'components/Logo';
import styles from './styles.module.css';

const About = () => {
    return (
        <MainLayout>
            <section className={styles.aboutUsSection}>
                <Logo />
                <Text>
                    Jesteśmy firmą, która od lat dostarcza najwyższej jakości gadżety i akcesoria. Naszą misją jest
                    zapewnienie klientom produktów, które łączą funkcjonalność, styl i innowacyjność. Współpracujemy
                    z najlepszymi dostawcami, co pozwala nam dostarczać tylko sprawdzone i zaufane produkty.
                </Text>
                <Text>
                    Dzięki doświadczeniu i zaangażowaniu w rozwój, zdobyliśmy zaufanie tysięcy klientów. Nasza oferta
                    stale się rozszerza, by spełniać oczekiwania najbardziej wymagających użytkowników. Dziękujemy za
                    wybór naszej firmy i zapraszamy do zakupów!
                </Text>
            </section>
        </MainLayout>
    )
}

export { About };
