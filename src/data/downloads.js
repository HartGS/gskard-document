// 下载数据配置
export const downloadData = {
  gskard: {
    name: "GSkard",
    description: "回合制卡牌PVP+PVE地图",
    latestVersion: "1.52",
    latestDate: "2025-09-21",
    downloads: [
      {
        version: "1.52",
        date: "2025-09-21",
        files: [
          {
            name: "GSkard V1.52.zip",
            url: "https://wwje.lanzouu.com/iinO736onjwd",
            info: "地图和资源包，先解压"
          },
          {
            name: "GSkard-Modpack.mrpack",
            url: "https://cdn.modrinth.com/data/KQK0AcoC/versions/q63ftYBF/%5B1.52%5DGSkard-Modpack.mrpack",
            info: "整合包，自带资源包，无地图，PCL&HMCL中搜 gskard 即可下载"            
          }
        ],
        changelog: [
          "修复了若干BUG"
        ]
      },
      {
        version: "1.5",
        date: "2025-09-14",
        files: [
          {
            name: "GSkard V1.5.zip",
            url: "https://wwje.lanzouu.com/iO4BY365uvde"

          }
        ],
        changelog: [
          "目嘿嘿嘿 摸了3个月 无数小测 终于把1.5端上来了",
          "现在地图的游戏版本是1.21.8+"
        ]
      },

    ]
  },
  // 预留其他项目的位置，方便后续扩展
  // futureProject: {
  //   name: "未来项目",
  //   description: "项目描述",
  //   latestVersion: "1.0.0",
  //   latestDate: "2024-01-01",
  //   downloads: []
  // }
};