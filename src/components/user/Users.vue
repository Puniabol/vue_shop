<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <el-table :data="userlist" border stripe="">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="date" label="日期" width="150"></el-table-column>
                <el-table-column prop="name" label="姓名" width="100"></el-table-column>
                <el-table-column prop="province" label="省份" width="100"> </el-table-column>
                <!-- <el-table-column prop="city" label="市区" width="100"></el-table-column> -->
                <el-table-column prop="address" label="地址" width="250"></el-table-column>
                <el-table-column prop="zip" label="邮编" width="120"></el-table-column>

                <el-table-column label="状态" width="120px">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.mg_state"></el-switch>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.id)"></el-button>

                        <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2
            },
            userlist: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                mg_state: false
                }, {
                id: 1,
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333,
                mg_state: true
                }, {
                id: 1,
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333,
                mg_state: false
                }, {
                id: 1,
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333,
                mg_state: true
                }],
            total: 0
        }
    },
    created() {
        this.getUserList()
    },
    methods: {
        async getUserList() {
            // const {data: res} = await this.$http.get('users', {
            //     params: this.queryInfo
            // })
            // if(res.meta.status !== 200) {
            //     return this.$http.error('获取用户列表失败！')
            // }
            // this.userlist = res.data.users
            // this.total = res.data.total
            console.log('无数据返回，userlist为假数据')
        },
        async removeUserById(id) {
                const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err => err)
                if(confirmResult !== 'confirm') return
                console.log(id);
                this.$message.success('删除成功！')
                
            }
        }
    }
</script>

<style lang="less" scoped>
</style>