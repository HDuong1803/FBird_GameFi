import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);


    const Choco = await ethers.getContractFactory("Choco");
    const choco = await Choco.deploy();
    console.log('Choco address: ', choco.address);
    Config.setConfig(network + '.Choco', choco.address);

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy();
    console.log('Choco address: ', vault.address);
    Config.setConfig(network + '.Vault', vault.address);
    await Config.updateConfig();
    
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});