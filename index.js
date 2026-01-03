import { execSync } from "child_process" //执行shell命令
import ora from "ora"

function command(cmd) {
    execSync(`git ${cmd}`)
}

function build() {
    const spinner = ora("正在构建...").start()
    execSync(`npm run build`)
    command("add .")
    command(`commit -m "${process.argv[2] || "update docs"}"`)
    command("push origin main")
    spinner.succeed("构建完成")
}


function main() {
    build()
}


main()