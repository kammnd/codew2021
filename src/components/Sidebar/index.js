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
                                dictionary={{ english: "About", russian: "Описание", kazakh: "Марафон туралы" }}
                        />
                    </SidebarLink>
                    <SidebarLink to="registration" onClick={toggle}>
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
                                dictionary={{ english: "FAQ", russian: "Вопросы-Ответы", kazakh: "Сұрақ-Жауап" }}
                            />
                    </SidebarLink>
                    <SidebarLink to="ourteam" onClick={toggle}>
                        <TranslatableText
                                dictionary={{ english: "Our Team", russian: "О Нас", kazakh: "Бiз туралы" }}
                        />
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLScz0OGyTUsl4jcnd23tT6BrMBlNQchdbF5_4RjYJWP6o-Dddw/viewform" }} target="_blank" >
                        <TranslatableText
                                dictionary={{ english: "Register", russian: "Регистрируйся", kazakh: "Тiркелу" }}
                        />
                        </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
