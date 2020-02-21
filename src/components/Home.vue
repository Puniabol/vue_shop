<template>
    <el-container class="home-container">
        <el-header>
            <div>
                <img src="../assets/logo.png">
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <el-aside :width="isCollapse?'64px':'200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" unique-opened="" :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
                    <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
                        <template slot="title">
                        <i :class="iconObj[item.id]"></i>
                        <span>{{item.authName}}</span>
                        </template>
                        <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children"  :key="subItem.id" @click="saveNavState('/' + subItem.path)">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{subItem.authName}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            // 数据手动输入menulist中，原设计为空对象
            // menulist: []
            menulist: [
                {
                    id: 100,
                    authName: "用户管理",
                    path: "rights",
                    children:[{
                        authName: "用户列表",
                        children: "1",
                        id: 104,
                        order: "1",
                        path: "users"
                    }]
                },
                {
                    id: 103,
                    authName: "权限管理",
                    path: "rights",
                    children:[
                        {
                        authName: "角色管理",
                        children: "1",
                        id: 1104,
                        order: "1",
                        path: "roles"
                        }, {
                        authName: "权限管理",
                        children: "1",
                        id: 1105,
                        order: "1",
                        path: "rights"
                        }
                    ]
                },
                {
                    id: 101,
                    authName: "商品管理",
                    path: "goods",
                    children:[
                        {
                            authName: "商品列表",
                            children: "1",
                            id: 2104,
                            order: "1",
                            path: "1"
                        }, {
                            authName: "分类参数",
                            children: "1",
                            id: 2105,
                            order: "1",
                            path: "1"
                        }, {
                            authName: "商品分类",
                            children: "1",
                            id: 2106,
                            order: "1",
                            path: "1"
                        }
                    ]
                },
                {
                    id: 102,
                    authName: "订单管理",
                    path: "orders",
                    children:[{
                        authName: "订单列表",
                        children: "1",
                        id: 104,
                        order: "1",
                        path: "1"
                    }]
                },
                {
                    id: 145,
                    authName: "数据统计",
                    path: "reports",
                    children:[{
                        authName: "数据统计",
                        children: "1",
                        id: 104,
                        order: "1",
                        path: "1"
                    }]
                }
            ],
            iconObj: {
                '100': 'el-icon-user-solid',
                '103': 'el-icon-box',
                '101': 'el-icon-s-goods',
                '102': 'el-icon-shopping-cart-2',
                '145': 'el-icon-document-copy'
            },
            isCollapse: false,
            activePath: ''
        }
    },
    created() {
        // this.getMenuList()
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        logout() {
            // 清除sessionStorage
            // window.sessionStorage.clear();

            this.$router.push('/login')
        },
        // async getMenuList() {
            // 从服务器获取左侧菜单数据 无服务器
            // const {data: res} = await this.$http.get('menus')
            // if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
            // this.menulist = res.data
            // 数据手动输入this.menulist中
        // },
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        saveNavState(activePath) {
            window.sessionStorage.setItem('activePath', activePath)
            this.activePath = activePath
        }
    }
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
        display: flex;
        align-items: center;
        height: 100%;
        img {
            height: 80%;
        }
        span {
            margin-left: 15px;
        }
    }

}
.el-container {
    background-color: #333744;
    .el-menu {
        border-right: none;
    }
}
.el-main {
    background-color: #eaedf1;
}
.toggle-button {
    background-color: #4a5064;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>