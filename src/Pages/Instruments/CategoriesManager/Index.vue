<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                <router-link :to="{ name: 'instruments'}">Каталог інструментів</router-link> > 
                Менеджер проектів > 
                Каталог
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                <table>
                    <tr>
                        <td>
                            Ідентифікатор <br>
                            <input type="text" v-model="where_group.sub_groups[0].where_statements[0].value">
                        </td>
                        <td>
                            Назва <br>
                        </td>
                        <td>
                            Батьківська категорія <br>
                            
                        </td>
                    </tr>
                </table>
                Кількіть записів:<br>
                Сторінка:<br>
                Сортувати:<br>
                Шукати:<br>
            </div>
        </template>
    </AppLayout>
</template>

<script>
import Api from '@/Services/Api'
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
    name: 'CategoriesManagerIndexPage',
    components: {
        AppLayout
    },
    data() {
        return {
            where_group: {
                connector: 'and',
                sub_groups: [
                    {
                        connector: 'and',
                        where_statements: [
                            {
                                enabled: false,
                                column: 'id',
                                operator: '=',
                                value: '',
                            }
                        ]
                    },
                    {
                        connector: 'or',
                        where_statements: [
                            {
                                column: 'id',
                                operator: 'like',
                                value: '',
                            }
                        ]
                    },
                ]
            },
            categories: [],
            records_numb: {
                value:'all',
                options: [
                    1,
                    5,
                    10,
                    15,
                    'all'
                ]
            },
            page_numb: {
                value: '',
                options: []
            },
            sort_by: {
                value: '',
                options: []
            },
            search: {
                query: '',
                value: 'all',
                options: [
                    'all'
                ]
            }
        }
    },
    mounted: function() {
        this.createSearch();
    },
    methods: {
        createSearch: function() {
            // var instance = this;
            Api().get('instruments/categories?where=' + JSON.stringify(this.where_group))
                .then(function(result) {
                    console.log(result);
                })
                .catch(function (error) {
                   console.log(error);
                });
        }
    }
}
</script>
