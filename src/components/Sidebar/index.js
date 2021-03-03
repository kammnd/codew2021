import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    Select 
} from './SidebarElements';

import LanguageConsumer from '../../context/LanguageConsumer';
import TranslatableText from '../../context/TranslatableText';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            {/* <LanguageConsumer>
                {({ updateLanguage }) => (
                        <Select onChange={updateLanguage}>
                            <option value="english">EN</option>
                            <option value="russian">RU</option>
                            <option value="kazakh">KZ</option>
                        </Select>
                )}
            </LanguageConsumer> */}
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "About", russian: "О нас", kazakh: "Марафон туралы" }}
                        />
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "Registration", russian: "Регистрация", kazakh: "Тіркелу" }}
                            />
                    </SidebarLink>
                    <SidebarLink to="schedule" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "Schedule", russian: "Расписание", kazakh: "Кесте" }}
                            />
                    </SidebarLink>
                    <SidebarLink to="sponsors" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "Sponsors", russian: "Спонсоры", kazakh: "Демеушілер" }}
                            />
                    </SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "FAQ", russian: "Частые вопросы", kazakh: "Сұрақ-Жауап" }}
                            />
                    </SidebarLink>
                    <SidebarLink to="ourteam" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "Our Team", russian: "Наша Команда", kazakh: "Біздің Топ" }}
                        />
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSf7-DIfW8sBtZiEogRiQ0VrzMVe4668JtHC6u1VM49nuR_peg/viewform?usp=sf_link" }} target="_blank" >Register</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
