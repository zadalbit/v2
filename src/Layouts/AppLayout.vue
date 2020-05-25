<template>
    <div>
        <div class="row no-margin">
            <div class="col-lg-8">
                <div class="content">
                    <div class="row no-margin">
                        <div class="col-lg-12 text-right breadcrumbs">
                            <slot name="breadcrumbs"></slot>
                        </div>
                    </div>
                    <div class="row no-margin">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                 <nav>
                    <ul>
                        <li class="contains-sub-list">
                            <label for="show_sub_list_1" class="pointer">Документації</label>
                            <input type="checkbox" class="checkbox-of-displaying" id="show_sub_list_1" name="" checked>
                            <label class="pointer show-sub-list-icon" for="show_sub_list_1"> +</label>
                            <label class="pointer hide-sub-list-icon" for="show_sub_list_1"> -</label>
                            <ul class="sub-list">
                                <li>
                                    <router-link :to="{ name: 'documentations'}">Каталог</router-link>
                                </li>
                                <li class="contains-sub-list">
                                    <label for="show_sub_list_2" class="pointer">ШІ</label>
                                    <input type="checkbox" class="checkbox-of-displaying" id="show_sub_list_2" name="" checked>
                                    <label class="pointer show-sub-list-icon" for="show_sub_list_2"> +</label>
                                    <label class="pointer hide-sub-list-icon" for="show_sub_list_2"> -</label>
                                    <ul class="sub-list">
                                        <li><a href="#" target="content">Нотатки</a></li>
                                    </ul>
                                </li>
                                <li>
                                    Бібліографія
                                </li>
                                <li>
                                    Програмування
                                    <ul>
                                        <li>
                                            Мови
                                            <ul>
                                                <li>
                                                    <a href="#" target="content">PHP</a>
                                                </li>
                                                <li>
                                                    <a href="#" target="content">JS</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Адміністрування ОС
                                    <ul>
                                        <li>
                                            Ubuntu
                                            <ul>
                                                <li>
                                                    <a href="#" target="content">Загальні відомості</a>
                                                </li>
                                                <li>
                                                    18.04 LTS
                                                    <ul>
                                                        <li>
                                                            <a href="#" target="content">Гарячі клавіші</a>
                                                        </li>
                                                        <li>
                                                            Приклади налаштувань
                                                            <ul>
                                                                <li>
                                                                    <a href="#" target="content">LAMP</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" target="content">Snap web-dev set</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Мови
                                    <ul>
                                        <li>
                                            <a href="#" target="content">Українська</a>
                                        </li>
                                        <li>
                                            <a href="#" target="content">Англійська</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" target="content">Фізика</a>
                                </li>
                                <li>
                                    <a href="#" target="content">Математика</a>
                                </li>
                                <li>
                                    <a href="#" target="content">Історія</a>
                                </li>
                            </ul>
                        </li>
                        <li> Інструменти
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'instruments'}">Каталог</router-link>
                                </li>
                                <li>
                                    Парсери
                                    <ul>
                                        <a href="#">Парсер PHP</a>
                                    </ul>
                                </li>
                                <li>
                                    Менеджер класів/об'єктів
                                    <ul>
                                        <li><a href="#">Каталог</a></li>
                                        <li><router-link :to="{ name: 'classes-manager-form'}">Форма</router-link></li>
                                        <li>Властивості</li>
                                        <li>Методи</li>
                                    </ul>
                                </li>
                                <li>
                                    Менеджер трейтів
                                    <ul>
                                        <li><a href="#">Каталог</a></li>
                                        <li><a href="#">Форма</a></li>
                                        <li>Властивості</li>
                                        <li>Методи</li>
                                    </ul>
                                </li>
                                <li>
                                    Менеджер проектів
                                    <ul>
                                        <li><router-link :to="{ name: 'projects-manager'}">Каталог</router-link></li>
                                        <li><router-link :to="{ name: 'projects-manager-form'}">Форма</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    Менеджер бібліотек
                                    <ul>
                                        <li><router-link :to="{ name: 'libraries-manager'}">Каталог</router-link></li>
                                        <li><router-link :to="{ name: 'libraries-manager-form'}">Форма</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    Шаблони обробки запитів
                                </li>
                                <li>
                                    Шаблони розташування і заповнення елементів
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppLayout',
}
</script>
